import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Blockquote } from "./components";

export const MultipleCustomHooks = () => {
  const { counter, reset, increment } = useCounter(1);
  const { data, hasError, isLoading, onFetch } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/1#${counter}`
  );

  const { quote, author } = Array.isArray(data) ? data[0] : {};

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Blockquote quote={quote} author={author} />
      )}
      <button
        className="btn btn-primary"
        onClick={() => {
          increment();
        }}
      >
        Next Quote
      </button>
    </>
  );
};
