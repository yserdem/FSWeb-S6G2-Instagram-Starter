import React from 'react';
import Gönderi from './Gönderi';
import './Gönderiler.css';

const Gönderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, gönderi} = props;

  return (
    <div className='posts-container-wrapper'>
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/
      gönderi.map(element => {
        return (
          <div key={element.id}>
            <Gönderi gönderi={element} gonderiyiBegen={gonderiyiBegen} />
          </div>
        )
      })
      }
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gönderiler;
