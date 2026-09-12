import { AgifyioEntityBase } from '../AgifyioEntityBase';
import type { AgifyioSDK } from '../AgifyioSDK';
import type { Control } from '../types';
import type { GetAge, GetAgeLoadMatch } from '../AgifyioTypes';
declare class GetAgeEntity extends AgifyioEntityBase<GetAge> {
    constructor(client: AgifyioSDK, entopts: any);
    make(this: GetAgeEntity): GetAgeEntity;
    load(this: any, reqmatch?: GetAgeLoadMatch, ctrl?: Control): Promise<GetAgeEntity>;
}
export { GetAgeEntity };
