import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import PageToolbar from "./components/PageToolbar";
import PageList from "./components/PageList";
import SectionList from "./components/SectionList";
import ItemList from "./components/ItemList";
import {useState} from "react";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
    const queryClient = new QueryClient();

    const [selectedPage, setSelectedPage] = useState(1);
    const [selectedSection, setSelectedSection] = useState(0);
    const [selectedItem, setSelectedItem] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
        <PageToolbar/>
        <PageList
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
        />
        <SectionList
            selectedPage={selectedPage}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
        />
        <ItemList
            selectedPage={selectedPage}
            selectedSection={selectedSection}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
        />
        <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
