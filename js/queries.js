import { collection, query, where } from 'firebase/firestore';

const queryexercises = function(queryField, queryString) {

    const exerciseRef = collection(db, 'exercises');
    
    let q = query(exerciseRef, where(queryField, 'in', [queryString]));
    
    const querySnapshot = getDocs(q);
    
    querySnapshot.forEach(doc => {
        console.log(doc.id, "=>", doc.name);
        
    });
    }

    export { queryexercises } 
