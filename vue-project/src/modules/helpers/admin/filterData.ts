export function filterData(search:string, filter:string, data: any, key:string) {
    let filteredData: any = data

    if (search && filter != 'id') {
        filteredData = data.filter((item: any) => item[key].toLowerCase().startsWith(search.toLowerCase()))
    }
    if (search && filter == 'id') {
        filteredData = data.filter((item: any) => item.id == search)
    }

    return filteredData;
}