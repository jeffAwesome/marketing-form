# What will the V1 Marketing Form Do?

  * Accept config object with needed hidden fields. 
  * The config of hidden fields can also dictate which items can be overwritten with a query string or cookie.
  * Parse the form looking for the hidden fields, if they aren't there it will add them to the form.
  * Overwrite the hidden fields values if there is a stored UTMZ cookie
  * Overwrite the hidden fields values if there is a query string, this trumps even the existence of UTMZ cookie
  * All visible fields can also have their values populated by query string.
