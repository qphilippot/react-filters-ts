import {AbstractFilter} from "./AbstractFilter.ts";

export class ColorFilter extends AbstractFilter {
    private readonly color: string;

    constructor(isEnabled: boolean, name: string, color: string) {
        super('filter-color',  name, isEnabled)
        this.color = color;
    }

    public getValue(): string {
        return this.color;
    }

    isSatisfiedBy(item): boolean {
        return (
            !super.isEnabled()
            || item.color === this.color
        );
    }

    public valuesAllowed(): string[] {
        return ['blue', 'red', 'green', 'orange'];
    }
}
