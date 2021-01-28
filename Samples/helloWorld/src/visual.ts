import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

import "./../style/visual.less"

export class Visual implements IVisual {

    private target: HTMLElement;
    private updateCount: number;

    constructor(options: VisualConstructorOptions) {
        console.log('Visual constructor', options);
        this.target = options.element;
        this.updateCount = 0;
    }

    public update(options: VisualUpdateOptions) {
        console.log('Visual update', options);
    
        var scaledFontSizeWidth: number = Math.round(options.viewport.width / 8);
        var scaledFontSizeHeight: number = Math.round(options.viewport.height / 5);
        var scaledFontSize: number = Math.min(...[scaledFontSizeWidth, scaledFontSizeHeight]);
        var scaledFontSizeCss: string = scaledFontSize + "px";   
    
        this.target.innerHTML = 
            `<table  id='myTable' style='font-size:${scaledFontSizeCss};'>
                <tr><td>Width:</td><td>${options.viewport.width.toFixed(2)}</td></tr>
                <tr><td>Height:</td><td>${options.viewport.height.toFixed(2)}</td></tr>
            </table>`;
    }
    
    
    
}