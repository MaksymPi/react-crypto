
import { Layout } from 'antd';



import AppHeader from './components/layout/AppHeader';
import AppSider from './components/layout/AppSider';
import AppContent from './components/layout/AppContent';




const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
};


export default function App() {
  return (
    <Layout>
      <AppSider />
    <Layout>
      <AppHeader />
      <AppContent />
    </Layout>
  </Layout>
);
}
