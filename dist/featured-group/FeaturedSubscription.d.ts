import { FeaturedGroup } from "..";
import { User } from '..';
export interface FeaturedSubscription {
    id: string;
    type: string;
    status: string;
    featuredGroup: FeaturedGroup;
    user: User;
    createdAt: string;
    updatedAt: string;
}
