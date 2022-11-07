// You probably know the 'like' system  from facebook and other pages. People can like blog posts, pictures and 
// other items. We want to create anthe text that should be displayed next to such an item.

// Implement a function likes - [string] > String, which must take an input array, containing the names of people who like an item
// It must return and display text as:
// likes [] = 'no one likes this'
// likes ['Peter'] = 'Peter likes this'
// likes ['Peter', 'Moses'] = 'Peter and Moses like this'
// likes ['Peter', 'Moses', 'John'] = 'Peter, Moses and John like this'
// likes ['Peter', 'Moses', 'John', 'Adams'] = 'Peter, Moses and 2 others like this'
// NB: AS the number of likes increases, the figure before two others too must increase

function namesOfLikers(names){
    if(names.length === 0){
        return 'no likes this post'
    }else if(names.length === 1){
        return  `${names[0]} likes this`
    }else if(names.length === 2){
        return  `${names[0]} and ${names[1]} like this`
    }else if(names.length === 3){
        return  `${names[0]}, ${names[1]} and ${names[2]} like this`
     }else if(names.length >= 4){
        return  `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
     }
 }
 alert(namesOfLikers(['john', 'Moses', 'Ali', 'Val', 'Alpha', 'Sommy'])) 