import {useQuery} from "@tanstack/react-query";
import {getPages} from "../api/queries";

export default function PageList({selectedPage, setSelectedPage}) {

    const {
        isPending,
        isError,
        data,
        error
    } = useQuery({
        queryKey: ['getPages'],
        queryFn: context => {
            return getPages();
        },
        staleTime: 5000
    })

    return (
        <ul>
            {data && data.map && data.map(page => (
                <li key={page.id}>
                    <a className={(selectedPage === page.id) ? 'active' : ''}
                       href={`#${page.id}`}
                       onClick={event => {
                           event.preventDefault();
                           setSelectedPage(page.id);
                       } }>{page.title}</a>
                </li>
            ))}
        </ul>
    )
}