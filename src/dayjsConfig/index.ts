import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

import 'dayjs/locale/ru';

dayjs.locale('ru');
dayjs.extend(duration);
dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);
