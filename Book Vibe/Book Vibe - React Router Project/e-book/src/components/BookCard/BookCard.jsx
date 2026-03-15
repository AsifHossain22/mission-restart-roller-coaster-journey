import React from "react";
import bookCardImage from "../../assets/book.png";
import starIcon from "../../assets/star-icon.png";

const BookCard = () => {
  return (
    <>
      {/* SingleBookCard */}
      <div className="p-6 space-y-6 border border-[#13131315] rounded-2xl">
        {/* Image */}
        <div className="bg-[#F3F3F3] rounded-2xl">
          <img src={bookCardImage} alt="Book Image" className="mx-auto py-8" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          {/* CardTags */}
          <div className="flex gap-3">
            <span className="badge badge-soft badge-success">Tag1</span>
            <span className="badge badge-soft badge-success">Tag2</span>
          </div>
          {/* BookTitle */}
          <h4>Book Title</h4>
          {/* AuthorName */}
          <p className="text-lg text-[#13131380] font-medium">
            By: Author Name
          </p>

          {/* Footer */}
          <div className="text-lg text-[#13131380] font-medium flex justify-between items-center border-t border-dashed border-[#13131315] pt-3">
            <span>Category</span>
            <span className="inline-flex gap-2">
              Rating <img src={starIcon} alt="Star Icon" className="w-6 h-6" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
