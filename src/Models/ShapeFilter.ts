import {AbstractFilter} from "./AbstractFilter.ts";

export class ShapeFilter extends AbstractFilter {
    private readonly shape: string;

    constructor(isEnabled: boolean, name: string, shape: string) {
        super('filter-shape', name, isEnabled);
        this.shape = shape;
    }


    isSatisfiedBy(item): boolean {
        return (
            !super.isEnabled()
            || item.shape === this.shape
        );
    }

    public valuesAllowed(): string[] {
        return ['circle', 'square'];
    }

    public getValue(): string {
        return this.shape;
    }
}
