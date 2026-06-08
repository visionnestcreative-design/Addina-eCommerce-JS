/**
 * A vanilla JS utility function to cleanly create DOM elements explicitly.
 * Uses standard `document.createElement`, `setAttribute`, and `appendChild`.
 */
export function el(tag, attributes = {}, ...children) {
    const svgTags = ['svg', 'path', 'g', 'circle', 'rect', 'line', 'polygon', 'polyline', 'ellipse'];
    const element = svgTags.includes(tag) 
        ? document.createElementNS('http://www.w3.org/2000/svg', tag) 
        : document.createElement(tag);
    
    
    for (const [key, value] of Object.entries(attributes)) {
        if (value === undefined || value === null) continue;
        
        if (key === 'className') {
            element.className = value;
        } else if (key === 'dataset') {
            for (const [dataKey, dataValue] of Object.entries(value)) {
                element.dataset[dataKey] = dataValue;
            }
        } else if (key === 'style' && typeof value === 'object') {
            for (const [styleKey, styleValue] of Object.entries(value)) {
                element.style[styleKey] = styleValue;
            }
        } else if (key.startsWith('on') && typeof value === 'function') {
            element.addEventListener(key.substring(2).toLowerCase(), value);
        } else if (key === 'innerHTML') {
            element.innerHTML = value;
        } else {
            element.setAttribute(key, value);
        }
    }
    
    
    for (const child of children) {
        if (child === null || child === undefined) continue;
        
        if (Array.isArray(child)) {
            child.forEach(c => {
                if (c instanceof Node) {
                    element.appendChild(c);
                } else if (typeof c === 'string' || typeof c === 'number') {
                    element.appendChild(document.createTextNode(String(c)));
                }
            });
        } else if (child instanceof Node) {
            element.appendChild(child);
        } else if (typeof child === 'string' || typeof child === 'number') {
            element.appendChild(document.createTextNode(String(child)));
        }
    }
    
    return element;
}
