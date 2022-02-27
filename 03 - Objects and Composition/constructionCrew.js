function constructionCrew(obj){
    if (obj.dizziness){
        obj.levelOfHydrated = obj.weight * 0,1 * obj.experience;
    }
    return obj;
}
constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true })