// ===============================================================================
// DATA
// Below data will hold all of friends.
// Initially we just set it equal to a "dummy" friends.
// ===============================================================================

const friendArray = [
    {
        "name":"Thanos",
        "photo":"https://images.immediate.co.uk/production/volatile/sites/3/2018/03/DTT4430_v707.1023-61174bd.jpg?quality=90&resize=620,413",
        "scores":[ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1 ]
      },
      {
        "name":"Groot",
        "photo":"https://images-na.ssl-images-amazon.com/images/I/71tWRjFIuHL._SX425_.jpg",
        "scores":[ 4, 2, 5, 5, 3, 2, 1, 5, 3, 2 ]
      },
      {
        "name":"Mario",
        "photo":"https://mario.nintendo.com/assets/img/home/intro/mario-pose2.png",
        "scores":[ 1, 3, 4, 2, 1, 1, 2, 3, 4, 5 ]
      },
      {
        "name":"Pikachu",
        "photo":"https://splicetoday.imgix.net/uploads/posts/photos/24975/D15670A3-3283-48E6-B8BC-C79038E737D6.jpeg",
        "scores":[ 1, 1, 2, 2, 1, 2, 1, 2, 1, 2 ]
      }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;