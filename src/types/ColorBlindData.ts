import { LSKeys } from "@/assets/constants";

class ColorBlindData {
    private _isActive: boolean;

    constructor() {
        const fromLS = localStorage.getItem(LSKeys.colorBlind);
        this._isActive = (fromLS && JSON.parse(fromLS)) ?? false;
    }

    get isActive(): boolean {
        return this._isActive;
    }

    toggle() {
        this._isActive = !this._isActive;
        localStorage.setItem(
            LSKeys.colorBlind, 
            JSON.stringify(this._isActive)
        );
    }
}

export default ColorBlindData