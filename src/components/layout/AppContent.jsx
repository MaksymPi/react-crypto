import { Layout } from 'antd';

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 80px)',
    color: '#fff',
    backgroundColor: '#053a8f',
    padding: '1rem',
  };

const AppContent = () => {
  return (
    <Layout.Content style={contentStyle}>Content</Layout.Content>
  )
}

export default AppContent