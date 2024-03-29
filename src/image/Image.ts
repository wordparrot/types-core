import { Site } from "..";
import { User } from "..";
import { Entry } from "..";
import { Banner } from "..";
import { FeaturedImage } from "..";
import { Repository } from "..";
import { PipelineNode } from "..";

export type ImageType = "hosted" | "external";

export interface Image {
  id: string;
  uniqId: string;
  title: string;
  subtitle: string;
  owner: string;
  filename: string;
  url: string;
  size: number;
  height: number;
  width: number;
  order?: number;
  status: string;
  type: ImageType;

  site: Site;
  siteId: string;
  user: User;
  userId: string;
  entries: Entry[];
  banners: Banner[];
  featuredImages: FeaturedImage[];
  repositoryId: string;
  repository: Repository;

  pipelineNodes?: PipelineNode[];

  createdAt?: string;
  updatedAt?: string;
}
