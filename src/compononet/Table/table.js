import React, { useEffect, useState, useMemo } from "react";
import classname from "./table.module.scss";

const Header = ({ headers }) => {
    return (
      <thead>
        <tr
          style={{
            fontSize: "12px",
            fontWeight: "600",
            margin: "5px",
            marginTop: "10px",
            height: "50px",
            boxShadow: "0 0.5px 2px rgba(45, 0, 2, 0.4)",
          }}
        >
          {headers.map((item) => (
            <th
              style={{
                border: "2px grey solid",
                padding: "5px",
              }}
              scope="col"
              key={item}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
    );
  };
const DataTable = ({ data, headers, onPress,title }) => {
  const [CurrentData, setCurrentData] = useState(
    [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          "userId": 1,
          "id": 4,
          "title": "eum et est occaecati",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          "userId": 1,
          "id": 5,
          "title": "nesciunt quas odio",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        }
  ]);
  const [totalItems, setTotalItems] = useState(0);
  const [search, setSearch] = useState("");

//   useEffect(() => {
//     setCurrentData(data);
//   }, [data]);

  const CurrentDataData = useMemo(() => {
    let computedCurrentData = CurrentData;

    if (search) {
      computedCurrentData = computedCurrentData?.filter(
        (comment) =>
          comment[headers[1]].toLowerCase().includes(search.toLowerCase()) ||
          comment[headers[2]].toLowerCase().includes(search.toLowerCase())
      );
    }

    setTotalItems(computedCurrentData?.length);

    //Current Page slice
    return computedCurrentData;
  }, [CurrentData, search]);

  return (
    <>
      <div>
        <div className={classname.basecardwrapper}>
          <div className={classname.cardtitle}>
            <p style={{ textAlign: "center" }}>{title}</p>
          </div>
          <div className={classname.carditemwrapper}>
            <div>
            
            </div>
            <div>
              
              <p>
                Total count : <span>{totalItems}</span>
              </p>
            </div>
          </div>

          <table
            cellspacing="2"
            rules="all"
            border="1"
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <Header headers={headers} />
           
            <tbody>
              {CurrentDataData?.map((comment,index) => (
                <tr
                key={comment.id}
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    margin: "5px",
                    marginTop: "10px",
                    boxShadow: "0 0.5px 2px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <th
                    className={classname.tablecell}
                    scope="row"
                    key={comment.id}
                  >
                    {index+1}
                  </th>
                  {
                    headers?.length>0 && (
                    headers?.slice(1)?.map((item)=><td key={item} className={classname.tablecell}>{comment[item]}</td>))

                  }
                  <td className={classname.tablecellx}>Edit</td>
                  <td className={classname.tablecellx}>delete</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataTable;
