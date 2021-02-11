/**
 * Boolzapp Vue
 */
var app = new Vue({
    el: '#app',
    data: {
        // indice chat
        indexChat: 0,
        active: 'active',
        indexName: 'Papà',
        newMessage: '',
        reply: 'ok!',
        time: '',
        setTime: dayjs().subtract(2, 'h').format(' HH:mm:ss'),
        research: '',
        showMe: true,
        showMenu: false,
        showImpo: false,
        showTheme: false,
        isDark: false,
        // nostro account
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        // Elenco contatti
        contacts: [
            {
                name: 'Papà',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/03/2021 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'received'
                    },
                    {
                        date: '10/03/2021 15:50:00',
                        message: 'Ricordati di dargli da mangiare...',
                        status: 'received'
                    },
                    {
                        date: '10/03/2021 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Marco',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '10/03/2021 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '10/03/2021 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo vero?',
                        status: 'received'
                    },
                    {
                        date: '10/03/2021 16:35:00',
                        message: 'Mi piacerebbe ma devo lavorare :(',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Diego',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '9/03/2021 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '9/03/2021 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '9/03/2021 16:15:22',
                        message: 'Ah scusami!',
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
                        date: '9/03/2021 15:30:55',
                        message: 'Come sei messa con la consegna del workshop?',
                        status: 'sent'
                    },
                    {
                        date: '9/03/2021 15:50:00',
                        message: 'Sinceramente non bene ahaha',
                        status: 'received'
                    },
                    {
                      date: '9/03/2021 15:51:00',
                      message: 'Tu?',
                      status: 'received'
                    }
                ],
            },
            {
              name: 'Angelo',
              avatar: '_5',
              visible: true,
              messages: [
                  {
                      date: '5/03/2021 15:30:55',
                      message: 'Stasera? vediamo la partita insieme?',
                      status: 'sent'
                  },
                  {
                      date: '5/03/2021 15:50:00',
                      message: 'Dai birretta e pizza da me!',
                      status: 'sent'
                  },
                  {
                      date: '5/03/2021 16:15:22',
                      message: 'Volentieri!',
                      status: 'received'
                  }
              ],
            },
            {
              name: 'Paola',
              avatar: '_6',
              visible: true,
              messages: [
                  {
                      date: '4/003/2021 15:30:55',
                      message: 'Stasera dove vuoi andare?',
                      status: 'sent'
                  },
                  {
                      date: '4/003/2021 15:50:00',
                      message: 'Mi piacerebbe un sacco andare al cinema!',
                      status: 'received'
                  }
              ],
            },
            {
              name: 'Beatrice',
              avatar: '_7',
              visible: true,
              messages: [
                  {
                      date: '3/03/2021 15:30:55',
                      message: 'Lo sai che ha aperto una nuova pizzeria sotto i portici?',
                      status: 'sent'
                  },
                  {
                      date: '3/03/2021 15:50:00',
                      message: 'Sì, ci sono stata sabato con Marco! La pizza è ottima!!',
                      status: 'received'
                  }
              ],
            },
            {
              name: 'Chiara',
              avatar: '_8',
              visible: true,
              messages: [
                  {
                      date: '2/03/2021 15:30:54',
                      message: 'Idee per il regalo della Bea?',
                      status: 'sent'
                  },
                  {
                      date: '2/03/2021 15:50:00',
                      message: 'Questa volta ho una idea bellissima',
                      status: 'received'
                  },
                  {
                    date: '2/03/2021 15:52:00',
                    message: 'Più tardi appena posso ti chiamo e ti dico tutto!',
                    status: 'received'
                }
              ],
            },
            {
              name: 'Marta',
              avatar: '_9',
              visible: true,
              messages: [
                  {
                      date: '28/02/2021 15:30:55',
                      message: 'Mi raccomando salutami la Chiaretta quando la vedi',
                      status: 'sent'
                  },
                  {
                      date: '28/02/2021 15:50:00',
                      message: 'ahahaha certo!!',
                      status: 'received'
                  },
                  {
                    date: '28/02/2021 16:15:00',
                    message: 'Ti saluta un sacco anche lei',
                    status: 'received'
                }
              ],
            },
            {
              name: 'Fra',
              avatar: '_10',
              visible: true,
              messages: [
                  {
                    date: '28/02/2021 15:50:00',
                    message: 'Ho bisogno assolutamente di vederti...ho un sacco di cose da raccontarti! Fammi sapere appena puoi per favore',
                    status: 'received'
                  },
                  {
                      date: '28/02/2021 15:57:55',
                      message: 'Ciao Fra!',
                      status: 'sent'
                  },
                  {
                    date: '28/02/2021 15:58:00',
                    message: 'Certo, in settimana va bene? dimmi tu quando preferisci',
                    status: 'sent'
                  },
                  {
                      date: '28/02/2021 16:03:10',
                      message: 'Martedì sera finisco presto, aperitivo in centro?',
                      status: 'received'
                  },
                  {
                    date: '28/02/2021 16:30:55',
                    message: 'Aggiudicato',
                    status: 'sent'
                  },
              ],
            },
            {
              name: 'Simo',
              avatar: '_11',
              visible: true,
              messages: [
                  {
                      date: '27/02/2021 15:30:55',
                      message: 'Ciao Bro come stai?',
                      status: 'sent'
                  },
                  {
                      date: '27/02/2021 15:50:00',
                      message: 'Incasinatissimo al momento ma non mi posso lamentare. Tu invece?',
                      status: 'received'
                  },
                  {
                      date: '27/02/2021 16:15:22',
                      message: 'Alla grande, settimana prossima vengo a trovarti.',
                      status: 'sent'
                  }
              ],
            },
            {
              name: 'Marco G.',
              avatar: '_12',
              visible: true,
              messages: [
                  {
                      date: '25/02/2021 15:30:55',
                      message: 'Maaa... questo Milan????',
                      status: 'received'
                  },
                  {
                      date: '25/02/2021 15:50:00',
                      message: 'Hai visto?!',
                      status: 'received'
                  },
                  {
                      date: '25/02/2021 16:15:22',
                      message: 'Ahahaha sono 10 anni che aspetti questo momento ammettilo',
                      status: 'sent'
                  },
                  {
                    date: '25/02/2021 16:30:55',
                    message: 'Quest anno non ferma nessuno!!!',
                    status: 'received'
                },
                {
                    date: '25/02/2021 16:40:00',
                    message: 'Qualità e progetto, nulla da dire',
                    status: 'sent'
                },
                {
                    date: '25/02/2021 16:55:22',
                    message: 'Vado allo stadio con mio padre questo fine settimana. Un suo collega ci ha regalato i biglietti',
                    status: 'received'
                },
                {
                  date: '25/02/2021 16:57:26',
                  message: 'Viene anche il Paolino?',
                  status: 'sent'
                },
                {
                  date: '25/02/2021 16:58:42',
                  message: 'Siii andiamo in curva con Pische!! Mio papà non sta più nella pelle',
                  status: 'received'
                },
                {
                  date: '25/02/2021 16:59:52',
                  message: 'Ahahah immagino',
                  status: 'sent'
                },
                {
                  date: '25/02/2021 16:00:10',
                  message: 'Aspe che ti chiamo al volo',
                  status: 'sent'
                },
              ],
            },
            {
              name: 'Vale',
              avatar: '_13',
              visible: true,
              messages: [
                  {
                      date: '22/02/2021 15:30:55',
                      message: 'Ciao Vale! Torni questo fine settimana?',
                      status: 'sent'
                  },
                  {
                      date: '22/02/2021 15:50:00',
                      message: 'Ciao',
                      status: 'received'
                  },
                  {
                    date: '22/02/2021 15:53:00',
                    message: 'Sì dovrei tornare venerdì con la Miky',
                    status: 'received'
                  },
                  {
                      date: '22/02/2021 16:15:22',
                      message: 'Ottimo fammi sapere se vi devo venire a prendere in stazione',
                      status: 'sent'
                  },
                  {
                    date: '22/02/2021 16:50:00',
                    message: 'Va bene, ti aggiorno nei prossimi giorni',
                    status: 'received'
                  },
              ],
            },
            {
              name: 'Luca',
              avatar: '_14',
              visible: true,
              messages: [
                  {
                      date: '19/02/2021 18:30:55',
                      message: 'Domenica carichissimo per la partita... è importante che giochi con la testa!',
                      status: 'sent'
                  },
                  {
                      date: '19/02/2021 18:50:00',
                      message: 'Sì, sabato vado a letto presto',
                      status: 'received'
                  },
                  {
                      date: '19/02/2021 19:15:22',
                      message: 'Bravo, riposati;)',
                      status: 'sent'
                  }
              ],
            },
        ]
    },
    // created() {
    //   if(document.getElementById('scuro').checked === true) {
    //     dark();
    //   }
    // },
    methods: {
      showChat: function(contact, index) {

        this.indexChat = index;
        console.log(this.indexChat);
        this.indexName = contact.name;

        if (this.indexChat === 0) {
          this.indexName = this.contacts[0].name;
        } else {
          this.indexName = contact.name;
        };

      },
      pushMessage() {

        if (this.newMessage !== '') {
          this.contacts[this.indexChat].messages.push({
            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
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
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: this.reply,
                status: 'received',
              });
            }, 1000);
        };
      },
      searchContact() {

         for (let i = 0; i < this.contacts.length; i++) {

           if(this.contacts[i].name.toLowerCase().includes(this.research.toLowerCase())) {
             this.contacts[i].visible = true;
           } else {
             this.contacts[i].visible = false;
           }
         }
      },
      dark() {
        this.isDark = true;
      }
    }
});
