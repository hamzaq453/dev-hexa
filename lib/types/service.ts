export interface Service {
  id: string;
  name: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  subServices: SubService[];
  features: Feature[];
  technologies: Technology[];
}

export interface SubService {
  name: string;
  description: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Technology {
  name: string;
  icon: string;
  color: string;
}

export interface ServicesData {
  services: Service[];
}
