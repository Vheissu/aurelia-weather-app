import { valueConverter } from '@aurelia/runtime';
import { format } from 'date-fns';

@valueConverter({
    name: 'formatDate'
})
export class FormatDate {
    toView(date): string {
        return date ? format(new Date(date), 'MM/dd/yyyy') : date;
    }
}