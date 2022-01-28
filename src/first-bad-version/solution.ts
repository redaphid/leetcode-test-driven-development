

  type isBadVersion = (version: number) => boolean;

  const findIt = (minVersion, maxVersion, isBad)=>{
    if(minVersion < 0 || maxVersion < 0) throw new Error("you've made some mistake")
    console.log({minVersion,maxVersion});
    if(minVersion === maxVersion) return minVersion
    if(maxVersion - minVersion === 1) return isBad(minVersion) ? minVersion : maxVersion

    const version = Math.round((minVersion + maxVersion)/2);
    console.log(`isBad(${version}), ${isBad(version)}`);
    if(isBad(version)){
      console.log(`${version} was bad, so we look at the left side.}`);
      return findIt(minVersion, version, isBad);
    }
    else {
      console.log(`${version} was good, so we look at the right side.`);
      const didFind = findIt(version, maxVersion, isBad);
      console.log({didFind})

      return didFind
    }
  }

  const  firstbadversion = (isBad:isBadVersion)=>{
    return (versionCount:number)=>{
      // const versions = new Array(versionCount).fill(0).map((_,i)=>i+1);
      return findIt(0, versionCount, isBad);
    }
  }
  export {firstbadversion}

  
