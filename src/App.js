import GlobalStyles from "./styles/GlobalStyles"
import { Layout } from './components/Layout/index'
import { VideoContextProvider } from "./components/contexts/VideoContext";

export function App() {
  return (
    <VideoContextProvider>
      <Layout />
      <GlobalStyles/>
    </VideoContextProvider>
  );
}