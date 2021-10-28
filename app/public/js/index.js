const Offer = {
    data() {
      return {
            "person": {},
            "books": [],
            "students": [],
            "offers": [],
            "selectedStudent": null,
            "offerForm": {},
            "selectedOffer": null
        }
    },
    computed: {
      prettyBirthday() {
        return dayjs(this.person.dob.date)
        .format('D MMM YYYY')
        }
    },
    methods: {
      fetchUserData() {
        console.log("A");
        fetch('https://randomuser.me/api/')
        .then( response => response.json() )
        .then( (responseJson) => {
            console.log(responseJson);
            console.log("C");
            this.person = responseJson.results[0];
        })
        .catch( (err) => {
            console.error(err);
        })
        console.log("B");
    },
        
        fetchBookData() {
            fetch('/api/books/')
            .then(response => response.json())
            .then((parsedJson) => {
                console.log(parsedJson);
                this.offers = parsedJson
            })
            .catch( err => {
                console.error(err)
            })
        },

        postOffer(evt) {
            console.log ("Test:", this.selectedOffer);
          if (this.selectedOffer) {
              this.postEditOffer(evt);
          } else {
              this.postNewOffer(evt);
          }
        },
        postEditOffer(evt) {
          this.offerForm.bookID = this.selectedOffer.bookID;
          // this.offerForm.studentId = this.selectedStudent.id;     
          
          //console.log("Editing!", this.offerForm);
  
          fetch('api/books/update.php', {
              method:'POST',
              body: JSON.stringify(this.offerForm),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              // TODO: test a result was returned!
              this.offers = json;
              
              // reset the form
              this.handleResetEdit();
            });
        },

        postNewOffer(evt) {
           // this.offerForm.studentId = this.selectedStudent.id;        
            console.log("Posting:", this.offerForm);

            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.offerForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.offers = json;
                
                // reset the form
                this.handleResetEdit();
              });

        },

        postDeleteOffer(o) {  
          // if ( !confirm("Are you sure you want to delete the offer from " + o.companyName + "?") ) {
          //     return;
          // }  
          
          //console.log("Delete!", o);
  
          fetch('api/books/delete.php', {
              method:'POST',
              body: JSON.stringify(o),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              // TODO: test a result was returned!
              this.offers = json;
              
              // reset the form
              this.handleResetEdit();
            });
        },

        handleEditOffer(offer) {
            this.selectedOffer = offer;
            this.offerForm = Object.assign({}, this.selectedOffer);
        },
        handleResetEdit() {
            this.selectedOffer = null;
            this.offerForm = {};
        }

      
    },
    created() {
        this.fetchBookData();

        console.log("A");
        fetch('https://randomuser.me/api/')
        .then( response => response.json() )
        .then( (responseJson) => {
            console.log(responseJson);
            console.log("C");
            this.person = responseJson.results[0];
        })
        .catch( (err) => {
            console.error(err);
        })
        console.log("B");
        this.fetchUserData();
        
    }
  }
  
Vue.createApp(Offer).mount('#offerApp');