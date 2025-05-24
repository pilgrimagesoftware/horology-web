
import { DateFormatStyle, HourStyle } from './formatting';

interface DateFormat {
    formatStyle: DateFormatStyle;
    hourStyle: HourStyle;
}

interface Adjustments {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export type { DateFormat, Adjustments };
