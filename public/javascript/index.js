const fn = async () => {
  const sites = await fetch("/list");
  document.getElementById("out").innerText = await sites.json();
};
fn();
