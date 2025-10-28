import servicesData from '../../data/services.json';
import { Service, ServicesData } from './types/service';

const data = servicesData as ServicesData;

export function getAllServices(): Service[] {
  return data.services;
}

export function getServiceById(id: string): Service | undefined {
  return data.services.find(service => service.id === id);
}

export function getServiceByName(name: string): Service | undefined {
  return data.services.find(service => 
    service.name.toLowerCase().replace(/\s+/g, '-') === name.toLowerCase()
  );
}

export function getServiceBySlug(slug: string): Service | undefined {
  return data.services.find(service => service.id === slug);
}

export function getAllServiceNames(): string[] {
  return data.services.map(service => service.name);
}

export function getAllServiceIds(): string[] {
  return data.services.map(service => service.id);
}
