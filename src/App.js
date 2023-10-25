import data from "./data_IO.json";
import Jobs from "./components/Jobs2";
import { useState } from "react";
import Header from "./components/Header";
// import Search from "./components/Search";

function App() {
  const [filterKeywords, setfilterKeywords] = useState([]);

  // const setSearchKeyword = (data) => {
  //   setfilterKeywords(data);
  // };

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setfilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setfilterKeywords([]);
  };

  return (
    <div>
      <div className="header"></div>


      {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
          clearAll={clearAll}
        />
      )}

      {/* <Search setSearchKeyword={setSearchKeyword} />  */}

      <Jobs
        keywords={filterKeywords}
        data={data}
        setKeywords={addFilterKeywords}
      />
    </div>
  );
}

export default App;
