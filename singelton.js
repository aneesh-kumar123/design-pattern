class Single
{
  static obj=null
  static newSingle()
  {
    try{
      if(Single.obj==null)
      {
        Single.obj=new Single()
        return Single.obj
      }
      else
      {
        return Single.obj
      }

    }
    catch(error)
    {
      console.log(error)
    }
  }
}

const instance1 = Single.newSingle();
const instance2 = Single.newSingle();

console.log(instance1 === instance2);