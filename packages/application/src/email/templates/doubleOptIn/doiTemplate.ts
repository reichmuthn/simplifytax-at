export const doiTemplateHtml = `<!doctype html>
<html lang="de">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>[ASM] Double-Opt-In</title>
    <style media="all" type="text/css">
        @media all {
            .btn-primary table td:hover {
                background-color: #509908 !important;
            }

            .btn-primary a:hover {
                background-color: #509908 !important;
                border-color: #509908 !important;
            }
        }

        @media only screen and (max-width: 640px) {
            .main p,
            .main td,
            .main span {
                font-size: 16px !important;
            }

            .wrapper {
                padding: 8px !important;
            }

            .content {
                padding: 0 !important;
            }

            .container {
                padding: 0 !important;
                padding-top: 8px !important;
                width: 100% !important;
            }

            .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important;
            }

            .btn table {
                max-width: 100% !important;
                width: 100% !important;
            }

            .btn a {
                font-size: 16px !important;
                max-width: 100% !important;
                width: 100% !important;
            }
        }

        @media all {
            .ExternalClass {
                width: 100%;
            }

            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
                line-height: 100%;
            }

            .apple-link a {
                color: inherit !important;
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                text-decoration: none !important;
            }

            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
                font-size: inherit;
                font-family: inherit;
                font-weight: inherit;
                line-height: inherit;
            }
        }
    </style>
</head>
<body style="font-family: Helvetica, sans-serif; -webkit-font-smoothing: antialiased; font-size: 16px; line-height: 1.3; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f2f2f2; margin: 0; padding: 0;">
<table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body"
       style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f2f2f2; width: 100%;" width="100%" bgcolor="#f2f2f2">
    <tr>
        <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;" valign="top">&nbsp;</td>
        <td class="container"
            style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; text-align: center; max-width: 600px; padding: 0; padding-top: 24px; width: 600px; margin: 0 auto;"
            width="600" valign="top">
            <img src="https://simplifytax-at-web.vercel.app/img/logo-simplifytax.png" alt="Logo" height="50" border="0" style="border:0; outline:none; text-decoration:none; display:inline-block;">
        </td>
        <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;" valign="top">&nbsp;</td>
    </tr>
    <tr>
        <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;" valign="top">&nbsp;</td>
        <td class="container"
            style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; max-width: 600px; padding: 0; padding-top: 24px; width: 600px; margin: 0 auto;"
            width="600" valign="top">
            <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 600px; padding: 0;">

                <!-- START CENTERED WHITE CONTAINER -->
                <span class="preheader"
                      style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Vielen Dank für dein Interesse an unseren Inhalten.</span>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="main"
                       style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border: 1px solid #eaebed; border-radius: 16px; width: 100%;"
                       width="100%">

                    <!-- START MAIN CONTENT AREA -->
                    <tr>
                        <td class="wrapper"
                            style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; box-sizing: border-box; padding: 24px;"
                            valign="top">
                            <p style="font-family: Helvetica, sans-serif; font-size: 16px; color:#08150E;font-weight: bold; margin: 0; margin-bottom: 16px;">Bitte bestätige deine E-Mail-Adresse</p>
                            <p style="font-family: Helvetica, sans-serif; font-size: 16px; color:#494A4B; font-weight: normal; margin: 0; margin-bottom: 16px;">Vielen Dank für dein Interesse an unseren Inhalten. Damit wir dich zukünftig auf dem Laufenden halten können, bestätige folgend deine E-Mail-Adresse.</p>
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary"
                                   style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; width: 100%; min-width: 100%;"
                                   width="100%">
                                <tbody>
                                <tr>
                                    <td align="left" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; padding-bottom: 16px;"
                                        valign="top">
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0"
                                               style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                            <tbody>
                                            <tr>
                                                <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; border-radius: 8px; text-align: center; background-color: #009fe3;"
                                                    valign="top" align="center"><a href="{{ doubleoptin }}" target="_blank"
                                                                                                     class="btn btn-primary"
                                                                                                     style="border-radius: 8px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; margin: 0; padding: 9px 18px; text-decoration: none; background-color: #58A709; color: #FCFFFA;">
                                                    E-Mail-Adresse bestätigen</a></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <p style="font-family: Helvetica, sans-serif; font-size: 16px; color:#494A4B; font-weight: normal; margin: 0; margin-bottom: 16px;">Du hast jederzeit die Möglichkeit dich abzumelden. Solltest du dich nicht angemeldet haben, ignoriere diese E-Mail. Du wirst automatisch aus unserer Datenbank entfernt.</p>
                        </td>
                    </tr>

                    <!-- END MAIN CONTENT AREA -->
                </table>

                <!-- START FOOTER -->
                <div class="footer" style="clear: both; padding-top: 24px; text-align: center; width: 100%;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0"
                           style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tr>
                            <td class="content-block"
                                style="font-family: Helvetica, sans-serif; vertical-align: top; color: #494A4B; font-size: 16px; text-align: center;"
                                valign="top" align="center">
                                <span class="apple-link"
                                      style="color: #494A4B; font-size: 16px; text-align: center; font-weight: bold;">
                                    <a href={{params.siteUrl}}"
                                       style="text-decoration: underline; color: #494A4B; font-size: 16px; text-align: center; font-weight: bold;">Simplify Tax Steuerberatung GmbH</a>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-block"
                                style="font-family: Helvetica, sans-serif; vertical-align: top; color: #494A4B; font-size: 16px; text-align: center; padding-top: 4px"
                                valign="top" align="center">
                                <span class="apple-link" style="color:#494A4B; font-size: 14px; text-align: center;">Mommsengasse 33 Top 2+5, 1040 Wien</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-block"
                                style="font-family: Helvetica, sans-serif; vertical-align: top; color: #76787a; font-size: 12px; text-align: center;"
                                valign="top" align="center">

                                <br>Keine E-Mails mehr erhalten? <a href={{unsubscribe}}" style="text-decoration: underline; color: #76787a; font-size: 12px; text-align: center;">Abbestellen</a>.

                            </td>
                        </tr>
                    </table>
                </div>

                <!-- END FOOTER -->

                <!-- END CENTERED WHITE CONTAINER --></div>
        </td>
        <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;" valign="top">&nbsp;</td>
    </tr>
</table>
</body>
</html>`;
