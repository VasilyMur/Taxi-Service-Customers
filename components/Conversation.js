import ChatBot from 'react-simple-chatbot';
import PropTypes from 'prop-types';


import base from '../base';

class Image extends React.Component {
  render() {
      return (
          <img src="https://j.gifs.com/kZkzpv.gif" />
      )
  }
}

class ImageTwo extends React.Component {
  render() {
      return (
          <img src="https://j.gifs.com/0VN4WN.gif" />
      )
  }
}

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      address: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, phone, address } = steps;


    this.setState({ name, phone, address });
  }

  componentDidMount() {

      const order = {
          name: this.state.name.value,
          phone: this.state.phone.value,
          address: this.state.address.value
      }
  console.log(order)
  
        this.ref = base.push('orders', {
          data: order
        }).then(() => {
          //Router.transitionTo('dashboard');
        }).catch(err => {
          // handle error
          console.log(err)
        })
  }


  render() {
    const { name, phone, address } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Ваши данные</h3>
        <table>
          <tbody>
            <tr>
              <td>Имя:</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Адрес:</td>
              <td>{address.value}</td>
            </tr>
            <tr>
              <td>Телефон:</td>
              <td>{phone.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};



class Conversation extends React.Component {
  // trackWindow = () => {
  //   const mobile = window.matchMedia("(max-width: 500px)").matches ? true : false;
  //   console.log(mobile)
  // }
  render() {

      return (
          <ChatBot 

          headerComponent={<h1 className="front-header" key={22}>Трезвый Водитель от <span key={11}>800</span>₽!</h1>}
          //headerComponent={"Трезвый Водитель"}
          //headerTitle={"Лелик поможет тебе заказать трезвого водителя:"}
          userAvatar={'http://res.cloudinary.com/dlmeqtsfq/image/upload/c_scale,h_70,q_70/v1530714044/Drive/semen70x70.png'}
          botAvatar={'http://res.cloudinary.com/dlmeqtsfq/image/upload/c_scale,h_70,q_auto/v1530715032/Drive/papanov70x70.png'}
          steps={[

              {
                  id: '1',
                  message: 'Ну, что...Выпил и хочешь заказать трезвого водителя?',
                  trigger: '2',
              },
              {
                  id: '2',
                  component: <Image />,
                  trigger: '3',
              },

              {
                  id: '3',
                  options: [
                  { value: 1, label: 'Хочу Заказать!', trigger: '5' },
                  { value: 2, label: 'Нет', trigger: '4' },
                  ],
              },
              {
                  id: '4',
                  message: 'Тогда бросай машину и езжай на метро!',
                  end: true,
              },
              {
                  id: '5',
                  message: 'Отлично - как тебя зовут?',
                  trigger: 'name',
              },


                {
                  id: 'name',
                  user: true,
                  trigger: '7',
                },
                {
                  id: '7',
                  message: 'Привет {previousValue}! Напиши мне свой телефон!',
                  trigger: 'phone',
                },

                {
                  id: 'phone',
                  user: true,
                  trigger: '9',
                },

                {
                  id: '9',
                  message: 'Так... Теперь введи свой адрес:',
                  trigger: 'address',
                },

                {
                  id: 'address',
                  user: true,
                  trigger: '11',
                },

                {
                  id: '11',
                  message: 'Отлично! Проверь, что все правильно:',
                  //end: true
                  trigger: 'review',
                },
                {
                  id: 'review',
                  component: <Review />,
                  asMessage: true,
                  trigger: 'update',
                  //end: true
                },
                {
                  id: 'update',
                  message: 'Хочешь что-нибудь поправить?',
                  trigger: 'update-question',
                },
                {
                  id: 'update-question',
                  options: [
                    { value: 'yes', label: 'Да', trigger: 'update-yes' },
                    { value: 'no', label: 'Нет', trigger: 'pre-end-message' },
                  ],
                },
                {
                  id: 'update-yes',
                  message: 'Какую информацию поправить?',
                  trigger: 'update-fields',
                },
                {
                  id: 'update-fields',
                  options: [
                    { value: 'name', label: 'Имя', trigger: 'update-name' },
                    { value: 'address', label: 'Адрес', trigger: 'update-address' },
                    { value: 'phone', label: 'Телефон', trigger: 'update-phone' },
                  ],
                },
                {
                  id: 'update-name',
                  message: 'Введи правильное имя:',
                  trigger: 'update-name-action',
                },
                {
                  id: 'update-name-action',
                  update: 'name',
                  trigger: '11',
                },
                {
                  id: 'update-phone',
                  message: 'Введи правильный номер:',
                  trigger: 'update-phone-action',
                },
                {
                  id: 'update-phone-action',
                  update: 'phone',
                  trigger: '11',
                },
                {
                  id: 'update-address',
                  message: 'Введи правильный адрес:',
                  trigger: 'update-address-action',
                },
                {
                  id: 'update-address-action',
                  update: 'address',
                  trigger: '11',
                },

                {
                  id: 'pre-end-message',
                  component: <ImageTwo />,
                  trigger: 'end-message',
              },

                {
                  id: 'end-message',
                  message: 'Спасибо! Все записали - сейчас позвоним тебе и подтвердим заказ!',
                  end: true,
                },

              
            ]}
          />
      )
  }
}


export default Conversation;