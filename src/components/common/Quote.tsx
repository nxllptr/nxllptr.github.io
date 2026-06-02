function Quote({ quote, author, ...props }: { quote: string; author?: string }) {
  return (
    <div className="border-l-4 border-blue-400 px-4 py-2 my-2 italic text-gray-300" {...props}>
      <p className="text-base">{quote}</p>

      {author && (
        <p className="text-right mt-2 text-sm text-gray-400">- {author}</p>
      )}
    </div>
  );
}

export default Quote;