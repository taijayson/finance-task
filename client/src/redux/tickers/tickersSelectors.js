const getAllTickers = (state) => state.tickers.items;
const getLoading = (state) => state.tickers.loading;

export { getAllTickers, getLoading };
