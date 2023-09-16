function BoxQuote({handleClick, number, quotes}) {
  return (
    <div id="quote-box" className="w-[700px] bg-green-300 rounded-2xl px-[100px] py-6 text-white shadow-lg">
        <div id="text" className="text-4xl text-center">`{quotes[number]['text']}`</div>
        <div id="author" className="text-end pt-3 pr-1 text-lg">- {quotes[number]['author']}</div>
        <div className="w-full flex justify-between pt-[20px]">
            <a id="tweet-quote" href="http://twitter.com/intent/tweet" target="_blank" className="text-lg rounded bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">Tweet</a>
            <button onClick={handleClick} id="new-quote" className="rounded bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">New Quote</button>
        </div>
    </div>
  )
}

export default BoxQuote