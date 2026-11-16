export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: URL;
  link?: URL;
  repo?: URL;
  tech?: string[];
  tags?: string[];
}
