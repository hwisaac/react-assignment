const Search = ({ keyword, data, isLoading }: any) => {
  return (
    <>
      <h2>keyword: {keyword}</h2>

      <ul>
        {isLoading
          ? "Loading..."
          : data?.map((i: any) => (
              <li key={i.id.videoId}>
                🟣 {i.snippet.title} | {i.snippet.channelTitle} |{" "}
                {i.snippet.description}
              </li>
            ))}
      </ul>
    </>
  );
};

export default Search;
