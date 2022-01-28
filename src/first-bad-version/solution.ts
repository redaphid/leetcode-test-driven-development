

  type isBadVersion = (version: number) => boolean;

  const findIt = (versions:number[],isBad:isBadVersion)=>{
    console.log({versions});
    if(versions.length === 0) return undefined;
    if(versions.length === 1) return isBad(versions[0]) ? versions[0] : undefined;

    const midIndex = Math.floor(versions.length/2);

    const version = versions[midIndex];
    console.log(`isBad(${version}), ${isBad(version)}`);
    if(isBad(version)){
      const left = versions.slice(0,midIndex);
      console.log(`${version} was bad, so we look at the left side. ${left}`);
      const didFind = findIt(left,isBad);
      if(didFind !== undefined) return didFind;
      return version
    }
    else {
      const right = versions.slice(midIndex+1);
      console.log(`${version} was good, so we look at the right side. ${right}`);
      const didFind = findIt(right,isBad);
      console.log({didFind})

      return didFind
    }
  }

  const  firstbadversion = (isBad:isBadVersion)=>{
    return (versionCount:number)=>{
      const versions = new Array(versionCount).fill(0).map((_,i)=>i+1);
      return findIt(versions,isBad);
    }
    
  }
  export {firstbadversion}

  
