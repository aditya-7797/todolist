import React, { useEffect } from 'react';

function ProductPreview() {
  useEffect(() => {
    const $previewContainer = document.querySelector('.products-preview');
    const $previewBox = $previewContainer.querySelectorAll('.preview');

    const productClickHandler = (event) => {
      const name = event.currentTarget.dataset.name;

      $previewContainer.style.display = 'flex';

      $previewBox.forEach((preview) => {
        const target = preview.dataset.target;
        if (name === target) {
          preview.classList.add('active');
        }
      });
    };

    const closePreviewHandler = () => {
      const activePreview = $previewContainer.querySelector('.preview.active');
      if (activePreview) {
        activePreview.classList.remove('active');
      }
      $previewContainer.style.display = 'none';
    };

    document.querySelectorAll('.products-container .product').forEach((product) => {
      product.addEventListener('click', productClickHandler);
    });

    $previewContainer.querySelectorAll('.fa-times').forEach((icon) => {
      icon.addEventListener('click', closePreviewHandler);
    });

    return () => {
      document.querySelectorAll('.products-container .product').forEach((product) => {
        product.removeEventListener('click', productClickHandler);
      });

      $previewContainer.querySelectorAll('.fa-times').forEach((icon) => {
        icon.removeEventListener('click', closePreviewHandler);
      });
    };
  }, []);

  const addChapter = () => {
    const currentInput = document.querySelector('#add_btn').previousElementSibling;
    const currentChapterName = currentInput.value;

    const newLi = document.createElement('li');
    newLi.classList.add('list_group_item', 'd-flex');
    newLi.innerHTML = `
      <h3 className="flex-grow-1">${currentChapterName}</h3>
      <button className="btn btn-danger removeBtn">Remove</button>
    `;

    document.querySelector('#parent-list').appendChild(newLi);

    currentInput.value = ''; // Clear input field after adding chapter
  };

  const cartClickHandler = () => {
    const productId = document.querySelector('.preview.active').dataset.target;
    const productName = document.querySelector(`.preview[data-target='${productId}'] h3`).textContent;

    const newLi = document.createElement('li');
    newLi.classList.add('list_group_item', 'd-flex');
    newLi.innerHTML = `
      <h3 className="flex-grow-1">${productName}</h3>
      <button className="btn btn-danger removeBtn">Remove</button>
    `;

    document.querySelector('#parent-list').appendChild(newLi);
  };

  return (
    <>
      {/* Your HTML content here */}
    </>
  );
}

export default ProductPreview;