type isBadVersion = (version: number) => boolean;

const findIt = (minVersion, maxVersion, isBad) => {
  if (minVersion === maxVersion) return minVersion;
  if (maxVersion - minVersion === 1) return isBad(minVersion) ? minVersion : maxVersion;


  const version = Math.round((minVersion + maxVersion) / 2);
  if (isBad(version)) return findIt(minVersion, version, isBad);
  return findIt(version, maxVersion, isBad);
};

const firstbadversion = (isBad: isBadVersion) => {
  return (versionCount: number) => {
    // const versions = new Array(versionCount).fill(0).map((_,i)=>i+1);
    return findIt(0, versionCount, isBad);
  };
};
export { firstbadversion };
