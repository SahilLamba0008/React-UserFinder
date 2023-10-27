import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import Card from "./Card";

const StyledHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  .home-wrapper {
    .search-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      form {
        margin: 20px 0;
        display: flex;
        justify-content: center;
        gap: 10px;
        input[type="text"] {
          padding: 5px 10px;
          border-radius: 5px;
          flex: 1;
          outline: none;
        }
      }
      .search-bar-right {
        button {
          margin-right: 5px;
        }
      }
    }
    @media (max-width: 720px) {
      .search-bar {
        flex-direction: column;
      }
    }
    h1 {
      font-size: 8rem;
      text-align: center;
    }
    .card-list {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
const Home = () => {
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [sortName, setSortName] = useState(true);
  const [showSearchHistory, setShowSearchHistory] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const storedSearchHistory =
      JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(storedSearchHistory);
    setFilteredData(storedSearchHistory);
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = response.data;
      setUserData(data); // Store the original data
      setFilteredData(data); // Initialize the filtered data with the original data
      setLoading(false);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sortData = (e) => {
    const sortedData = [...filteredData];
    sortedData.sort((a, b) => {
      if (sortName) {
        return a.name.localeCompare(b.name); //ascending
      } else {
        return b.name.localeCompare(a.name); //descending
      }
    });

    setFilteredData(sortedData);
    setSortName((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      alert("Please enter valid user name");
      return;
    }
    console.log("Name: ", inputValue.toLowerCase());

    const filteredData = userData.filter(
      (user) => user.username.toLowerCase() === inputValue.toLowerCase()
    );
    setFilteredData(filteredData);

    const updatedSearchHistory =
      JSON.parse(localStorage.getItem("searchHistory")) || [];
    updatedSearchHistory.push(inputValue.toLowerCase());
    localStorage.setItem("searchHistory", JSON.stringify(updatedSearchHistory));
    setSearchHistory(updatedSearchHistory);
    setInputValue("");
  };

  const displaySearchHistory = () => {
    const searchHistory =
      JSON.parse(localStorage.getItem("searchHistory")) || [];
    console.log("Search History:", searchHistory);
    setShowSearchHistory((prev) => !prev);
  };

  return (
    <StyledHome>
      <div className="home-wrapper">
        <div className="search-bar">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              placeholder="enter user name e.g. Bret"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <input type="submit" value="Submit" className="btn" />
          </form>
          <div className="search-bar-right">
            <button className="btn" onClick={sortData}>
              Sort
            </button>
            <button className="btn" onClick={fetchData}>
              Reset
            </button>
            <button className="btn" onClick={displaySearchHistory}>
              History
            </button>
          </div>
        </div>

        {showSearchHistory ? (
          <div>
            <h2>Search History : </h2>
            <div>
              {searchHistory.map((searchTerm, index) => (
                <div key={index}>{searchTerm}</div>
              ))}
            </div>
          </div>
        ) : (
          <div className="card-list">
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              filteredData.map((user) => <Card data={user} key={user.id} />)
            )}
          </div>
        )}
      </div>
    </StyledHome>
  );
};

export default Home;
