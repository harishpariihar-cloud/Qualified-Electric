import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ServicePage from '@/pages/ServicePage';
import LocationPage from '@/pages/LocationPage';
import { services, serviceAreas } from '@/data/site-data';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        {services.map((service) => (
          <Route key={service.slug} path={`/${service.slug}`} element={<ServicePage slug={service.slug} />} />
        ))}
        {serviceAreas.map((area) => (
          <Route key={area.slug} path={`/${area.slug}`} element={<LocationPage slug={area.slug} />} />
        ))}
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
