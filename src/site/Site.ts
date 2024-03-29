import { Dns, Seo, Social, Theme } from ".";
import { Role } from "..";
import { Banner } from "..";
import { Category } from "..";
import { Entry } from "..";
import { Image } from "..";
import { Pipeline } from "..";
import { FeaturedGroup } from "..";

export interface Site {
  id: string;
  hubSiteId?: string;
  clientId?: string;
  keyValidator?: string;

  defaultSubdomain: string;
  domain: string;
  domainApproved: boolean;
  authScheme: string;

  title: string;
  content?: string;
  organization?: string;
  website?: string;
  searchPlaceholder?: string;

  logo?: string;
  logoApproved?: boolean;
  favicon: string;

  enableCommunication?: boolean;
  communicationEmail?: string;
  locked?: boolean;
  banned?: boolean;

  analytics?: any;
  dns: Dns;
  seo: Seo;
  social: Social;
  theme: Theme;

  banners?: Banner[];
  categories?: Category[];
  charts?: any[];
  contacts?: any[];
  entries?: Entry[];
  images?: Image[];
  redirects?: any[];
  pipelines?: Pipeline[];
  featuredGroups?: FeaturedGroup[];

  createdAt?: string;
  updatedAt?: string;
}
