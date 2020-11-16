/**
 * Boolzapp Vue
 */
var app = new Vue({
    el: '#app',
    data: {
        // indice chat
        indexChat: 0,
        active: 'active',
        indexName: 'Michele',
        newMessage: '',
        reply: 'ok!',
        time: '',
        setTime: dayjs().subtract(2, 'h').format(' HH:mm:ss'),
        // nostro account
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        // Elenco contatti
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
    },
    methods: {
      showChat: function(contact, index) {

        this.indexChat = index;
        console.log(this.indexChat);

        if (this.indexChat === 0) {
          this.indexName = this.contacts[0].name;
        } else {
          this.indexName = contact.name;
        };

      },
      pushMessage() {

        if (this.newMessage !== '') {
          this.contacts[this.indexChat].messages.push({
            date: dayjs().format('D/MM/YYYY HH:mm:ss'),
            message: this.newMessage.trim(),
            status: 'sent',
          });
          this.newMessage = '';

            setTimeout(() => {
              this.time = dayjs().format(' HH:mm:ss');

              if(this.time === dayjs().format(' HH:mm:ss')) {
                this.setTime = '';
              };

              this.contacts[this.indexChat].messages.push({
                date: dayjs().format('D/MM/YYYY HH:mm:ss'),
                message: this.reply,
                status: 'received',
              });
            }, 1000);
        };
      },
    }
});
