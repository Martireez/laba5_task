import React from 'react';

function CurrentDate() {
  var now = new Date();
  var dateString = now.toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  return (
    <div className="current-date">
      <strong>Текущая дата и время:</strong> {dateString}
    </div>
  );
}

export default CurrentDate;