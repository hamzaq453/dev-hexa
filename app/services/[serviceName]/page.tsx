import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/lib/utils/serviceLoader';
import ServicePageVariant5 from '@/app/components/service/ServicePageVariant5';

interface ServicePageProps {
  params: {
    serviceName: string;
  };
}

export async function generateStaticParams() {
  const { getAllServiceIds } = await import('@/lib/utils/serviceLoader');
  const serviceIds = getAllServiceIds();
  
  return serviceIds.map((id) => ({
    serviceName: id,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { getServiceBySlug } = await import('@/lib/utils/serviceLoader');
  const service = getServiceBySlug(params.serviceName);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.name} | DevHexa`,
    description: service.description,
    openGraph: {
      title: `${service.name} | DevHexa`,
      description: service.description,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.serviceName);
  
  if (!service) {
    notFound();
  }

  return <ServicePageVariant5 service={service} />;
}
