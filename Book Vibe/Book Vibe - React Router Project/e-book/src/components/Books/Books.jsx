import React from "react";
import BookCard from "../../components/BookCard/BookCard";

const Books = () => {
  return (
    <section className="m-4 lg:m-0">
      {/* SectionTitle */}
      <h2 className="mb-4 lg:mb-7 text-2xl lg:text-[40px] font-bold text-center">
        Books
      </h2>

      {/* BooksContainer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5 lg:mb-10">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </section>
  );
};

export default Books;
