class SetClass{
    constructor(list){
        this.collection = [];
        if(list) this.createSet(list);
    }
    has(value){
        if(this.collection.indexOf(value) > -1){
            return true;
        }
        else{
            return false;
        }
    }
    add(value){
        if(this.has(value)){
            return false;
        }
        else{
            this.collection.push(value);
        }
    }
    remove(value){
        if(this.has(value)){
            this.collection = this.collection.filter(items=>items!==value);
        }
        else{
            false;
        }
    }
    createSet(list){
        if(Array.isArray(list)){
            list.forEach(item=>{
                if(!this.has(item)){
                    this.add(item);
                }
            })
        }
        else return false;
    }
    value(){
        return this.collection;
    }
    intersect(intersectingList){
        let intersectingSet = new SetClass(intersectingList);
        let intersection = [];
        intersectingSet.map(item=>{
            if (this.has(item)){
                intersection.push(item)
            }
        });
        return intersection;
    }
    difference(differenceList){
        let differenceSet = new SetClass(differenceList);
        let difference = [];
        intersectingSet.map(item=>{
            if (!this.has(item)){
                difference.push(item)
            }
        });
        return difference;
    }
    union(unionList){
        return new SetClass(this.collection.concat(unionList));
    }
};

// creates a new empty set collection
const newSet = new SetClass();
// adding new items to the set
newSet.add(1);
newSet.add(2);

// adding another instance of 1 should be rejected
newSet.add(1);
newSet.add(5);

console.log(newSet.value());

// removing a set
newSet.remove(5);
console.log(newSet.value());

// creates a new set and removes duplicates
const newSet2 = new SetClass([1,2,3,4,5,5,6,6,6,1]);
console.log(newSet2.value());

